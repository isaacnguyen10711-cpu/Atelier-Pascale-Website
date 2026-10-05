import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function EnquiryLink({ language = 'en' }: { language?: 'en' | 'vi' }) {
  return (
    <Link
      href={language === 'vi' ? '/vi/contact/' : '/contact/'}
      className="group inline-flex shrink-0 items-center gap-3 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ap-ink"
    >
      {language === 'vi' ? 'Tư vấn sản phẩm' : 'Enquire about a piece'}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition group-hover:translate-x-1"
        strokeWidth={2}
      />
    </Link>
  )
}

export default EnquiryLink
