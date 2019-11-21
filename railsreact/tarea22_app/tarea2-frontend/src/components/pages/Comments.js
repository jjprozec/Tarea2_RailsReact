import React from 'react'
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react'



const CommentExampleComment = () => (
  <Container maxWidth="sm">
      <Comment.Group>
    <Header as='h3' dividing>
      Comentarios del Curso
    </Header>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Alumno1</Comment.Author>
        <Comment.Metadata>
          <div>Ayer a las 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Profesor que entra en la prueba de mañana?</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Responder</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Profe1</Comment.Author>
        <Comment.Metadata>
          <div>Hoy a las 12:01PM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Estimados Alumnos la Solemne 1 se corre para la proxima semana</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Responder</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Alumno2</Comment.Author>
            <Comment.Metadata>
              <div>Justo Ahora</div>
            </Comment.Metadata>
            <Comment.Text>Gracias Profe!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Responder</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Alumno3</Comment.Author>
        <Comment.Metadata>
          <div>Hace 5 días</div>
        </Comment.Metadata>
        <Comment.Text>¿Quién tiene la Tarea 1 que me la pase?</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Responder</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Añadir Comentario' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  </Container>
)

export default CommentExampleComment
