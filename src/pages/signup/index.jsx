import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegisterValidation } from '@/services/AuthValidation';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);  
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    await RegisterValidation(formData,setError,setLoading)
  }
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-red-600"> Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium mb-1">Password</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</Label>
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Confirm your password"
              />
            </div>

            {error && (
              <h1 className="text-3xl text-red-400">{error}</h1> // Display error message
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>

            <div className="text-center text-sm">
              <a href="#" className="text-red-600 hover:underline">Already have an account? Login</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
