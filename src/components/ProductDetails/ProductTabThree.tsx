import manImage from "@/assets/images/Image (23).png"
import {  Check } from "lucide-react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Star } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


  type CardProps = React.ComponentProps<typeof Card>

export default function ProductTabThree({ className, ...props }: CardProps) {

    const reviews =[{
        id:1,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    },{
        id:2,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    },{
        id:3,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    },{
        id:4,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    },{
        id:5,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    },{
        id:6,
        name:'محمد خالد',
        image:manImage,
        date:"13/10 /2020",
        description:"استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً"
    }]
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
        },
      })
    
      
    
    const renderStars = (rating: number) => {
        return (
          <div className="flex gap-1 justify-end mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                fill={i < rating ? "#FFC62A" : "#D6D6D6"}
                stroke={i < rating ? "#FFC62A" : "#D6D6D6"}
                className="w-4 h-4"
              />
            ))}
          </div>
        );
      };
  return (
    <div className="w-full flex max-md:flex-wrap gap-3">
        <Card className={cn("w-full md:w-1/3", className)} {...props}>
      <CardHeader>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 bg-surface-secondary rounded-xs p-4">
          {/* <BellRing /> */}
          <div className="flex-1 space-y-1 text-center mx-auto">
            <p className="text-sm font-medium leading-none">
                4.5 من 5
            </p>
            <div className="flex text-filled-star mx-auto"> 
                {renderStars(5)}
            </div>
            <p className="text-sm text-muted-foreground">
              60 تقييم على المنتج
            </p>
          </div>
        </div>
        <div>
        <Form {...form}>
      <form  className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>أضف تعليقك</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="برجاء اضافة تعليقك .." {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-accent-primary w-full">نشر تعليقك</Button>
      </form>
    </Form>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>


    <Card className={cn("w-full md:w-2/3 ", className)} {...props}>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription className="flex justify-between rounded-sm border py-sm px-md border-content-muted">
            <p className="font-bold text-lg text-content-dark">تعليقات المستخدمين</p>
            <div className="flex">
                <p className="text-content-base">ترتيب حسب :  الاحدث</p>
                <ChevronDown />
            </div>

        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="mb-4 flex gap-3 border-b border-content-muted items-start pb-4 last:mb-0 last:pb-0"
            >
                <img className="min-w-14" src={review.image}/>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-semibold text-content-dark">{review.name}</p>
                            <div className="flex text-filled-star my-sm"> 
                                {renderStars(5)}
                            </div>
                        </div>
                        <p className="text-sm text-content-base">
                        {review.date}
                        </p>
                    </div>
                    <p className="text-body-small text-content-base">{review.description}</p>
                </div>
                
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-transparent border-0 text-content-base 
        hover:bg-transparent hover:text-accent-secondary tansition">
          <Check />    عرض المزيد
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
