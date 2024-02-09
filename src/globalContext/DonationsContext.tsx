import { Accessor, Setter, createContext, useContext, createSignal } from 'solid-js'

interface ContextProps {
    program: Accessor<string>,
    setProgram: Setter<string>,
    amount: Accessor<string>,
    setAmount: Setter<string>,
    name: Accessor<string>,
    setName: Setter<string>,
    surname: Accessor<string>,
    setSurname: Setter<string>,
    email: Accessor<string>,
    setEmail: Setter<string>,
    cellphone: Accessor<string>,
    setCellphone: Setter<string>,
}

const DonationContext = createContext<ContextProps>();

export function DonationContextProvider(props: any) {
    const [ program, setProgram ] = createSignal('');
    const [ amount, setAmount ] = createSignal('');
    const [ name, setName ] = createSignal('');
    const [ surname, setSurname ] = createSignal('');
    const [ email, setEmail ] = createSignal('');
    const [ cellphone, setCellphone ] = createSignal('');

    return (
        <DonationContext.Provider 
            value={{
                program,
                setProgram,
                amount,
                setAmount,
                name,
                setName,
                surname,
                setSurname,
                email,
                setEmail,
                cellphone,
                setCellphone,
            }}>
            {props.children}
        </DonationContext.Provider>
    )
}

export const useDonationContext = () => useContext(DonationContext)!;