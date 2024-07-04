import { Autocomplete } from 'components/ui/autocomplete';
import React, {FC} from 'react'

export const SecondControll = () => {
    const options = [
        {id:1, name:'sss'},
        {id:2, name:'sss'}
    ]
    return (
        <div>
            <h1>SECOND</h1>
            <Autocomplete
                options={options}
                getOptionLabel={(option)=>option.name}
            />
        </div>
    )
}