import { 
    InputHTMLAttributes,
    forwardRef
} from 'react'
import Error from '../assets/icons/error.svg'

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
                        font-kumbh-bold font-bold text-black'
                >
                    {labelText}
                </label>

                <input 
                    ref={ref}
                    {...inputProps}
                    className='mt-2 flex h-12 
                        w-full items-center justify-center rounded border
                        bg-white p-3 text-base outline-none border-grey focus:border-black focus:border-2'
                    aria-describedby={errorMessage ? `${inputProps.id}-error` : undefined}
                />
                {errorMessage && (
                    <small
                    id={`${inputProps.id}-error`}
                    className='text-sm text-red pl-6'
                    style={{
                        backgroundImage: `url(${Error})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundPosition: 'left',
                      }}
                    >
                        {errorMessage}
                    </small>
                )}
                </div>
            </>
        )
})
