import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button'

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-screen flex'>
      <div className="w-[50%] hidden lg:block">
        <div className="h-screen bg-[#1D3658] grid">
          <div className="place-self-center h-44">
            <div className="grid gap-5 ml-10">
              <div>
                <span className="text-4xl font-bold text-white">Manage you workforce <br /></span><span className="text-[#27A599] text-4xl font-bold">efficiently.</span>
              </div>
              <div>
                <span className="text-white text-lg">
                  Complete HRIS solution with Philippine government-mandated benefits, payroll, attendance tracking, and more.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center place-items-center lg:w-[50%] sm:w-full">
        <div className="h-screen grid justify-center place-items-center">
          <form className="w-96 p-6">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-600 text-sm mt-1">
              Sign in to your account to continue
            </p>

            <div className="mt-6 flex flex-col space-y-2">
              <TextField
                id="email"
                label="Email"
                size="small"
                fullWidth
              />

              <div className='mt-5'>
                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className='mt-2'>
                <Button variant="contained" className='' fullWidth>
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login