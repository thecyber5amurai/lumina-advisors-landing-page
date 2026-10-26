type Variant = 'primary' | 'secondary';

interface ButtonProps{
    label: string;
    variants?: Variant;
}

export function Button({label, variants}: ButtonProps) {
    return (
        <button  className={
            variants === 'primary' ? 'bg-[#0f172a] text-white p-4 rounded-md text-xl transition-all duration-300 hover:bg-[#1e293b] hover:shadow-md hover:-translate-y-0.5':
            variants === 'secondary' ? 'border-4 border-[#94a3b8] p-4 rounded-md text-xl hover:-translate-y-0.5':
            "bg-blue-400 text-white p-4 rounded-md text-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5"
        }>
        {label}
        </button>
    );
}
