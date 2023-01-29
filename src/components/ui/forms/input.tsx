import { forwardRef } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    error?: string;
    className?: string;
    inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            type = 'text',
            className,
            inputClassName = 'bg-transparent',
            ...props
        },
        ref
    ) => {
        const { t } = useTranslation('common');
        return (
            <div className="tk-lp-form-item">
                <label className="tk-lp-label">
                    {label && (
                        t(label)
                    )}
                </label>
                <input
                    type={type}
                    ref={ref}
                    {...props}
                    className={classNames(
                        'tk-lp-input',
                        inputClassName
                    )}
                />
                {error && (
                    <span role="alert" className="block pt-2 text-xs text-warning">
                        {t(error)}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
export default Input;
