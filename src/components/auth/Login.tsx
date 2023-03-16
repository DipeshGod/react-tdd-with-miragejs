import { useForm } from 'react-hook-form';

type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>();

  const onLogin = handleSubmit((data) => console.log('data', data));

  return (
    <div>
      <h2>Welcome Back, Please Login</h2>
      <form onSubmit={onLogin}>
        <input {...register('email')} type="email" placeholder="email" />
        <br />
        <br />
        <input
          {...register('password')}
          type="password"
          placeholder="password"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
