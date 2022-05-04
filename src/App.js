import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {register,formState:{errors},handleSubmit} = useForm();
  const onSubmit = uservalue => console.log(uservalue)


  return (
    <div className='register'>
      <h1>REGISTRATION FORM</h1>
      <form onSubmit = {handleSubmit(onSubmit)} method = "post" >
      <span>FIRST NAME &nbsp;&nbsp;</span>  
      <input {...register('firstname',{required:true,minLength:3,maxLength:30})} />
      {errors.firstname?.type === 'required' && 'first name is required'}
      <br/><br/>
      
      <span>LAST NAME&nbsp;&nbsp;</span>  
      <input {...register('lastname',{minLength:3,maxLength:30})} />
      {errors.lastname?.type === 'minLength' && 'Last name must have atleast 3 characters'}
      {errors.lastname?.type === 'maxLength' && 'Last name must have maximum of 30 characters'}
      <br/><br/>
     
      <span>EMAIL&nbsp;&nbsp;</span>  
      <input {...register('email',{required:true,pattern:/\S+@\S+\.\S+/ })} />
      {errors.email?.type === 'required' && 'email is required'}
      {errors.email?.type === 'pattern' && 'email is not valid'}
      <br/><br/>

      <span>PASSWORD&nbsp;&nbsp;</span>  
      <input type = "password" {...register('password',{required:true,minLength:8,maxLength:20})} />
      {errors.password?.type === 'required' && 'password is required'}
      {errors.password?.type === 'minLength' && 'password must be 8 characters'}<br/><br/>
      <input type = "submit" className = "submit" value = "SUBMIT" {...register('next')}/>
    </form>
    </div>
    

  );
}

export default App;
