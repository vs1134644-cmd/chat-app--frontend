import { Link, useNavigate } from "react-router"
import Button from "./shared/Button"
import Card from "./shared/Card"
import Input from "./shared/Input"
import Form, { type FormDataType } from "./shared/Form"
import httpInertCeptor from "../lib/httpInterceptor"
import CatchError from "../lib/CatchError"
import { toast } from "react-toastify"

const Signup = () => {
  const navigate = useNavigate()

  const signup = async (value: FormDataType) => {
    try {
      const { data } = await httpInertCeptor.post("/auth/signup", value)
      toast.success(data?.message)
      navigate("/login")
    } catch (err) {
      CatchError(err)
    }
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-6/12 animate__animated animate__fadeIn">
        <Card noPadding>
          <div className="grid grid-cols-2">
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-xl font-bold text-black">SIGN UP</h1>
                <p>Start your first chat now !</p>
              </div>

              <Form onValue={signup} className="space-y-6">
                <Input name="fullname" placeholder="Fullname" />
                <Input name="email" placeholder="Email id" />
                <Input type="password" name="password" placeholder="Password" />
                <Input name="mobile" placeholder="Mobile" />
                <Button icon="arrow-right-up-line">Sign up</Button>
              </Form>

              <div className="flex gap-3">
                <p>Already have an account ?</p>
                <Link to="/login" className="text-green-400 font-medium hover:underline">Sign in</Link>
              </div>
            </div>
            <div className="overflow-hidden bg-linear-to-t from-sky-500 to-indigo-500 h-125 rounded-r-xl flex justify-center items-center">
              <img src="/images/auth.svg" alt="auth" className="full animate__animated animate__slideInUp animate__faster" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Signup