import { 
    InputHTMLAttributes,
    forwardRef
} from 'react'

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string
    errorMessage?: string
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ labelText, errorMessage, ...inputProps }: CustomInputProps, ref) => {
        return (
            <>
            <div className='mt-4'>
                <label 
                    htmlFor={inputProps.id}
                    className='
                        text-base text-navy-700 dark:text-white
                        font-bold'
                >
                    {labelText}
                </label>

                <input 
                    ref={ref}
                    {...inputProps}
                    className='mt-2 flex h-12 
                        w-full items-center justify-center rounded-xl border 
                        bg-white/0 p-3 text-sm outline-none border-gray-200'
                    aria-describedby={errorMessage ? `${inputProps.id}-error` : undefined}
                />
                {errorMessage && (
                    <small id={`${inputProps.id}-error`} className='mt-2 text-sm text-red'>
                        {errorMessage}
                    </small>
                )}
                </div>
            </>
        )
})
