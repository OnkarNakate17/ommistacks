import brandIcon from '../assets/brand-icon.png'

export function BrandMark({ size = 30 }: { size?: number }) {
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
