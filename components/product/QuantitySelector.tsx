interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, min = 1, max = 10 }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-border">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center text-lg text-slate-600 hover:text-navy disabled:opacity-30"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-semibold text-ink" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center text-lg text-slate-600 hover:text-navy disabled:opacity-30"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}
