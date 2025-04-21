import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function ProductTabTwo() {
    
const invoices = [
    {
      id:1,
      invoice: "العلامة التجارية",
      paymentMethod: "آبل",
    },
    {
      id:2,
      invoice: "اللون",
      paymentMethod: "رصاصي",
    },
    {
      id:3,
      invoice: "تقنية الاتصال",
      paymentMethod: "Wireless",
    },
    {
      id:4,
      invoice: "اسم الطراز",
      paymentMethod: "MWP22ZP/A",
    },
    {
      id:5,
      invoice: "الابعاد",
      paymentMethod: "160.8×78.1×7.7 ملم جرام",
    },
    {
      id:6,
      invoice: "الشريحة",
      paymentMethod: "يدعم الهاتف شريحتين",
    },
    {
      id:7,
      invoice: "المادة",
      paymentMethod: "الزجاج",
    },
    {
      id:8,
      invoice: "الوزن",
      paymentMethod: "‏0.45 أوقية",
    },
    {
      id:9,
      invoice: "المادة",
      paymentMethod: "الزجاج",
    }
  ]
  
  
  return (
    <div>
        
        <Table>
            <TableHeader>
              <TableRow>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice} 
                className={`border-0 ${invoice.id %2 ==0? "bg-surface-secondary":""}`}>
                  <TableCell className="font-medium text-content-dark">{invoice.invoice}</TableCell>
                  <TableCell className="text-content-base">{invoice.paymentMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> 
    </div>
  )
}
