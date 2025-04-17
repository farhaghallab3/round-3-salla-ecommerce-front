
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import ProductTabOne from "./ProductTabOne"
import ProductTabTwo from "./ProductTabTwo"
import ProductTabThree from "./ProductTabThree"




export function ProductDetailsTabs() {
  return (
    <Tabs dir="rtl" defaultValue="account" className="w-full pt-xl ">
      <TabsList className="grid  w-full  md:w-1/2  grid-cols-3 bg-transparent rounded-none">
        <TabsTrigger value="productDetailsO" className="w-full h-full  data-[state=active]:bg-button-primary">تفاصيل المنتج</TabsTrigger>
        <TabsTrigger value="productDetailsT" className="w-full data-[state=active]:bg-button-primary">تفاصيل المنتج</TabsTrigger>
        <TabsTrigger value="productRating" className="w-full data-[state=active]:bg-button-primary">تقييمات المنتج</TabsTrigger>

      </TabsList>
      <TabsContent value="productDetailsO">
        <Card className="border rounded-none  border-content-muted border-t-accent-primary">
          <CardHeader>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* tab one content */}
            <ProductTabOne/>
            
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="productDetailsT">
      <Card className="border rounded-none  border-content-muted border-t-accent-primary">
          <CardHeader>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* tab two content */}
            <ProductTabTwo/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="productRating">
      <Card className="border rounded-none  border-content-muted border-t-accent-primary">
          <CardHeader>
          </CardHeader>
          <CardContent className="space-y-2 ">
            {/* tab three content */}
            <ProductTabThree/>

            
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
