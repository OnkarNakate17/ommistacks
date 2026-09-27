import brandIcon from '../assets/brand-icon.png'

export function BrandMark({ size = 80 }: { size?: number }) {
  return (
    <img
      src={brandIcon}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="object-contain"
      style={{ height: size, width: 'auto' }}
    />
  )
}
