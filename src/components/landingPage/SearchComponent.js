import React, { useState } from 'react'
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';
import http from '../../Utils';
import { toast } from 'react-toastify';

const SearchComponent = () => {

    const [state, setState] = useState({ query: '', fetchedItems: [], loading: false, showDropdown: false })

    const onChangeQuery = (e) => {
        setState({ ...state, query: e.target.value })
    }


    const search = async (e) => {
        e.preventDefault()

        setState({ ...state, loading: true })
        try {
            const res = await http.get('search-property', { search: state.query })
            setState({ ...state, fetchedItems: res.data, showDropdown: true, loading: false })
            console.log(res)
        } catch (error) {
            setState({ ...state, loading: false })
            toast.error('Sorry, could not find property', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error)
        }

    }

    let searchResult = state.fetchedItems.length === 0 ? (<p>No property found</p>) : state.fetchedItems.map((val, index)   => 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam, amet vel soluta, cupiditate eum dignissimos sapiente ad, qui odio dolorum odit sunt. Aut, at vero adipisci rerum eveniet quasi!</p>

    )

    window.onclick = (e) => {
        const elem = document.querySelector('#searchModal')

        if (e.target !== elem) {
            setState({ ...state, showDropdown: false })
        }
    }

    return (
        <>
            <section className='transparentContainer'>
                <div className='searchBox'>
                    <CustomInput value={state.query} placeholder={'Please enter text'} onChange={onChangeQuery} name={'query'} />
                    <CustomButton onClick={search} title={'Search'} customStyle={{
                        backgroundColor: '#3E4C66', color: '#fff', padding: '10px 30px',
                        borderRadius: '6px', display: 'flex', justifyContent: 'center'
                    }} />

                    {state.showDropdown || state.loading ? 
                    <div className="searchDropdown" id='searchModal'>
                        <div>
                            {state.loading && <p>Loading...</p>}
                            {state.loading ? '' : searchResult}
                        </div>
                    </div> : ''}
                </div>
            </section>
        </>
    )
}

export default SearchComponent