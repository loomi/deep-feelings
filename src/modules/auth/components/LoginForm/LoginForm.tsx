import { Button } from '@chakra-ui/react';

import { LoginCredentials } from '../../api/types';

import schema from './schema';

import { FieldWrapper, Form, TextInput } from '@/components/Form';
import * as LC from '@/components/LC';
import { useAuth } from '@/lib/authentication';

type LoginFormProps = {
  onSuccess: () => void;
  onError: (message: string) => void;
};

export const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <Form<LoginCredentials>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await login(values);
          onSuccess();
        } catch (err) {
          onError(err.response.data.message);
        }
      }}
      validationSchema={schema}
    >
      {() => (
        <LC.Vertical w="100%">
          <FieldWrapper
            name="email"
            required
            label="Email"
            as={(props) => <TextInput type="email" {...props} />}
          />
          <FieldWrapper
            name="password"
            required
            label="Senha"
            as={(props) => <TextInput type="password" {...props} />}
          />

          <LC.Vertical center spaceBetween>
            <Button
              isLoading={isLoggingIn}
              type="submit"
              className="w-full"
              variant="@primary"
              w="fit-content"
              px={10}
            >
              Entrar
            </Button>
          </LC.Vertical>
        </LC.Vertical>
      )}
    </Form>
  );
};
