import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MdAdd } from "react-icons/md";

interface DialogDemoProps {
    btnClassName: string
}

export function DialogDemo({ btnClassName }: DialogDemoProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex itens-center justify-center py-3'>
                    <Button className={`drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] max-[550px]:w-[90%] ${btnClassName}`}>
                        <MdAdd size={15}/>
                        <text className='w-[80%] text-start pl-2'>
                            Cadastrar conta
                        </text>
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#0a0a0a]">
                <DialogHeader>
                    <DialogTitle>Adicionar nova conta</DialogTitle>
                    <DialogDescription>
                        Você poder adiocionar quantas contas você quiser.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="name" className="text-right text-[#fff]">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            defaultValue=""
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="password" className="text-right text-[#fff]">
                            Senha
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            defaultValue=""
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Cadastrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}