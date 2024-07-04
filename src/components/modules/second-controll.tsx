import { CountryInfo } from 'api/apiService';
import { Autocomplete } from 'components/ui/autocomplete';
import { useStore } from 'hooks/use-store';
import { observer } from 'mobx-react-lite';
import React, {FC, useEffect, useState} from 'react'

export const SecondControll = observer(() => {

    const {countryInfo} = useStore();
    
    const [ options, setOptions ] = useState<CountryInfo[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    

    useEffect(()=>{
        countryInfo.getCountriesInfo('');
    },[])

    useEffect(()=>{
        if(countryInfo.cointriesInfo?.state === 'fulfilled')
        setOptions(countryInfo.cointriesInfo?.value)
    },[countryInfo.cointriesInfo?.value])

    const handleInput = (value:string) => {
        countryInfo.getCountriesInfo(value);
    }

    useEffect(()=>{
        if(countryInfo.cointriesInfo?.state === 'pending') setLoading(true);
        else setLoading(false)
    },[countryInfo.cointriesInfo?.state])

    return (
        <div>
            <h1>SECOND</h1>
            <Autocomplete
                label='first'
                fullWidth
                options={options}
                limitOptions={3}
                onInput={handleInput}
                isLoading={loading}
                getOptionLabel={(option)=>option.fullName}
                renderOption={(option, props)=>(
                    <div {...props} style={{display:'flex', alignItems:'center', gap:10}}>
                        <img style={{width:'30px', height:'20px'}} src={option.flag} alt={option.name} />
                        <div>{option.fullName}</div>
                    </div>
                )}
            />
            <hr/>
            <Autocomplete
                label='second'
                fullWidth
                options={options}
                limitOptions={10}
                onInput={handleInput}
                isLoading={loading}
                getOptionLabel={(option)=>option.fullName}
                renderOption={(option, props)=>(
                    <div {...props} style={{display:'flex', alignItems:'center', gap:10}}>
                        <img style={{width:'30px', height:'20px'}} src={option.flag} alt={option.name} />
                        <div>{option.fullName}</div>
                    </div>
                )}
            />
        </div>
    )
})