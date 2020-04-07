import React from 'react';
import { StoreState } from '../../reducers';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import history from '../../helpers/history';
import { ProjectData, editProject, deleteProject } from '../../actions';
import { RouteComponentProps } from 'react-router-dom';
import { View, ContentLight } from '../../components/designSystem/layout';
import Subheader from '../../components/Subheader';
import SegmentedControl from '../../components/SegmentedControl';
import { getProjectFromSlug } from '../../selectors/getProject';
import Head from '../../components/Head';
import Header from '../../components/Header';
import { DangerButton, OutlineButton } from '../../components/designSystem/button';
import { SettingsForm, FormActions } from './style';
import { Input, TextArea } from '../../components/designSystem/formElements';

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentProject: ProjectData;
  editProject: (id: string, values: { title: string; description: string }) => void;
  deleteProject: (id: string) => void;
}

interface FormValues {
  title: string;
  description: string;
}

const Flow: React.FC<Props> = (props: Props) => {
  const { currentProject } = props;
  const { projectSlug } = props.match.params;

  const initialValues: FormValues = {
    title: currentProject.title,
    description: currentProject.description
  };

  const onEditSubmit = (title: string, description: string) => {
    props.editProject(currentProject.id, {
      title,
      description
    });

    history.push(`/${props.match.params.projectSlug}/boards`);
  };

  const onProjectDelete = () => {
    props.deleteProject(currentProject.id);

    history.replace('/');
  };

  return (
    <View>
      <Head title={`Settings - ${currentProject.title}`} description={'Tasks assigned to flow.'} />
      <Header title={`Project settings`} projectID={currentProject.id} />
      <Subheader>
        <SegmentedControl controls={[{ label: 'Overview', path: `/${projectSlug}/settings` }]} />
      </Subheader>
      <ContentLight>
        <Formik
          initialValues={initialValues}
          onSubmit={({ title, description }) => {
            onEditSubmit(title, description);
          }}
        >
          {formik => (
            <SettingsForm onSubmit={formik.handleSubmit}>
              <Input
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <TextArea
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <FormActions>
                <DangerButton onClick={() => onProjectDelete()}>Delete Project</DangerButton>
                <OutlineButton type="submit">Save</OutlineButton>
              </FormActions>
            </SettingsForm>
          )}
        </Formik>
      </ContentLight>
    </View>
  );
};

const mapStateToProps = ({ projects }: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps.match.params)
  };
};

export default connect(
  mapStateToProps,
  { editProject, deleteProject }
)(Flow);
