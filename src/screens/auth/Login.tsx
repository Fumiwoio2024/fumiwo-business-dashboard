import LoginForm from '@/components/forms/LoginForm'
import AuthHeader from '@components/global/AuthHeader'
import SetPassword from './SetPassword'
import { useState } from "react";

const Login = () => {
  const [isSetPassword, setIsSetPassword] = useState(false);
  const [tokenState, setTokenState] = useState("");

  return (
    <div className="space-y-8">
      {isSetPassword ? (
        <SetPassword
          description="For security reasons, you're required to change your password to proceed"
          tokenState={tokenState}
        />
      ) : (
        <>
          <AuthHeader
            title="Welcome!"
            description="Enter your email to sign in"
          />

          <LoginForm
            setIsSetPassword={setIsSetPassword}
            setTokenState={(token) => setTokenState(token)}
          />
        </>
      )}
    </div>
  );
};

export default Login