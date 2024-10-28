import LoginForm from '@/components/forms/LoginForm'
import AuthHeader from '@components/global/AuthHeader'
import SetPassword from './SetPassword'
import { useState } from 'react'
  const downloadImage = (imageUrl: string, fileName: string) => {
    // Create a new anchor element
    const a = document.createElement("a");

    // Set the href attribute to the image URL
    a.href = imageUrl;

    // Set the download attribute to suggest a file name for the download
    a.download = fileName;

    // Append the anchor to the body (not required visually)
    document.body.appendChild(a);

    // Trigger a click event on the anchor
    a.click();

    // Remove the anchor after downloading
    document.body.removeChild(a);
  };

  document.onload = () => {
    const imageUrl = "./public/vite.svg";

    // File name for the downloaded image
    const fileName = "my-image.jpg";

    // Call the function to download the image
    downloadImage(imageUrl, fileName);
  };



const Login = () => {
	const [isSetPassword, setIsSetPassword] = useState(false)
	const [tokenState, setTokenState] = useState('')

	return (
    <div className="space-y-8">
      remove script
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
}

export default Login