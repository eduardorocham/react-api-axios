import { useState, ChangeEvent } from 'react';

type Props = {
    onAdd: (title:string, body:string) => void;
}

export const PostsForm = ({ onAdd }: Props) => {

    //Variáveis
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    //Eventos que guardam os valores nas variáveis
    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }
    
    const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    }

    //Roda a função que faz a requisição:
    const handdleAddClick = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        } else {
            alert('Preencha os campos!')
        }
    }

    return (
        <fieldset>
            <legend>Criar novo post</legend>

            <input value={addTitleText} style={{display:"block"}} type="text" placeholder='Digite um texto'onChange={handleAddTitle}/>

            <textarea value={addBodyText} style={{display:"block"}} onChange={handleAddBody}></textarea>

            <button onClick={handdleAddClick}>Adicionar</button>
        </fieldset>
    )
}