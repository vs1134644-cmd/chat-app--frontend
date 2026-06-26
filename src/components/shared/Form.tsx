import type { FC, ReactNode, SyntheticEvent } from "react"


interface FormInterface {
    children: ReactNode;
    className: string;
    onValue: (value: FormDataType) => void
}

export type FormDataType = Record<string, string>

const Form: FC<FormInterface> = ({ children, className, onValue }) => {

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        const formData = new FormData(form)

        const data: FormDataType = {}

        formData.forEach((value, name) => {
            data[name] = value.toString()
        })
        onValue(data);

    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    )
}

export default Form




// const age1 = 45

// const obj = {
//     name:"rahul",
//     ["age1"]:56
// }

// console.log(obj);