type ButtonType = "submit" | "reset" | "button" | undefined

interface PrimaryButtonProps  {
    type?: ButtonType,
    children: React.ReactNode
}

const PrimaryButton= ({type,children}:PrimaryButtonProps) => {
    return(
        <button type={type} className="mt-6 bg-[#415a77] rounded-md text-white px-6 py-3 block rounded-md">
            {children}
        </button>
    )
}

export default PrimaryButton;