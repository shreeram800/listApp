import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { useController, useForm } from "react-hook-form"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {
  const {register, handleSubmit,formState: {errors},control }=useForm()

  const {field: countryField } = useController({name: "country", control , rules: {required:{ value:true , message: "Required"}}})
  function onSubmit(e) {
    console.log(e)
    alert("Success")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message} >
        <label className="label" htmlFor="email">
          Email 
        </label>
        <input className="input" type="email" id="email"
         {...register("email", {required:true, validate: value=>{
          if(!value.endsWith("@shreeram.com")){
            return "Must End with @shreeram.com"
          }
        },required: {value:true, message:"Required"}
        } )} />

      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message} >
        <label className="label" htmlFor="password">
          password 
        </label>
        <input className="input" type="password" id="password" autoComplete=""
         {...register("password", {required: {value:true, message:"Required"},
         minLength: {value: 10, message: "Must include 10 characters"},
         validate: {hasLowerCase: value=>{
          if(!value.match(/[a-z]/)){
            return "Must to a lowerCase letter"
          }
         },
         hasUpperCase: value=>{
          if(!value.match(/[A-Z]/)){
            return "Must to a UpperCase letter"
          }
        },
        hasNumerical: value=>{
         if(!value.match(/[0-9]/)){
           return "Must include a Number"
         }
       }
      }
      })}/>
      </FormGroup>

      <FormGroup errorMessage={errors?.country?.message}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          options={COUNTRY_OPTIONS}
          {...countryField}
        />
      </FormGroup>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
