import React, { useState } from 'react'
import MembersRow from '../../components/dashboard/MembersRow';
import Agent from '../../assets/images/agent.jpeg';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import http from '../../Utils';
import axios from 'axios';
import qs from 'qs'

const Members = () => {

    const [state, setState] = useState({ query: '', loading: false })

    const onChangeQuery = (e) => {
        setState({...state, query: e.target.value})
    }

    const searchAgent = async() => {
        // setState({...state, loading: true})
        const {query} = state
        // const param = {name: state.query}
        // console.log('form data', param)
        const obj = {name: query}
        // console.log(obj)
        try {
            const res = await http.get(`agency/search-members`,obj)
            console.log(res)
            setState({...state, loading: false})
        } catch (error) {
            console.log(error)
            alert('request failed')
            setState({...state, loading: false})
        }

// try{

//     let header = {
//         'content-type': 'application/json',
//     }

//     let body = {
//         name: query
//     }
// console.log(body)
//     const res = await axios({
//         method: 'POST',
//         headers: header,
//         data: body,
//         url: "https://evlerr-api.herokuapp.com/api/v1/agency/search-members?name="+query
//     })
//     console.log(res)
// } catch(error) {
//     console.log(error)
// }

        // var myHeaders = new Headers();
        // myHeaders.append("x-access-token", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg5NGZjODA3N2ZhOTg0YmYwZTZjZTciLCJ1c2VybmFtZSI6Im1hbnRyYSBlc3RhdGUiLCJzb2NpYWxzIjpbXSwiaXNWZXJpZmllZCI6dHJ1ZSwiZW1haWwiOiJnb3ppZWNoYXJpdHk4OUBnbWFpbC5jb20iLCJyb2xlIjoiYWdlbmN5IiwiY3JlYXRlZEF0IjoiMjAyMi0wNS0yMVQyMDo0NzowNC4yOTNaIiwidXBkYXRlZEF0IjoiMjAyMi0wNS0yMlQwMDo0Mzo0Ni41ODhaIiwiX192IjowLCJmdWxsTmFtZSI6Ik1hbnRyYSBSZWFsIGVzdGF0ZSAmIGNvbnN1bHRhbmN5Iiwic2Vzc2lvbiI6IjYyOGRkZGMxZjIwZDNiMzE3ZTdmMjU5ZSIsImlhdCI6MTY1MzQ2NDUxMywiZXhwIjoxNjUzNDY1NzEzfQ.kY6d2l0i0Uy2BhZGq59_HBECrN0ZsEXNcxKquN-_6x86HQlZZgvMw4hLeHwgdwXQifT55aNiwffRSddPoE_7iZGIp9gtsoiMEh169Tl8LbUSfQa1nkovik5oGIpA6_1zSAyx68kBr1Ll8zNKTE4YKkaCRlqWp26arlU2y_1rNQxO1gry86lZX1q-PKadjx7_06eZogpqpG-EeTDjxk8RHMiCDNG3wI5YDnASp8imVHdpLxpfL9ls6exdUSPZz1IQT5-PZ_p3u2Ww3miVDoaxNBzjKDq4yLLugG_d2GvBgkBRU2KKbYaNERGkVD8865QlMxlKsBBpgJxLvwVd3vUR1w");
        // myHeaders.append("x-refresh-token", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg5NGZjODA3N2ZhOTg0YmYwZTZjZTciLCJ1c2VybmFtZSI6Im1hbnRyYSBlc3RhdGUiLCJzb2NpYWxzIjpbXSwiaXNWZXJpZmllZCI6dHJ1ZSwiZW1haWwiOiJnb3ppZWNoYXJpdHk4OUBnbWFpbC5jb20iLCJyb2xlIjoiYWdlbmN5IiwiY3JlYXRlZEF0IjoiMjAyMi0wNS0yMVQyMDo0NzowNC4yOTNaIiwidXBkYXRlZEF0IjoiMjAyMi0wNS0yMlQwMDo0Mzo0Ni41ODhaIiwiX192IjowLCJmdWxsTmFtZSI6Ik1hbnRyYSBSZWFsIGVzdGF0ZSAmIGNvbnN1bHRhbmN5Iiwic2Vzc2lvbiI6IjYyOGYyMWZmNDM1ZTQyMmM5NjZhNDFhMSIsImlhdCI6MTY1MzU0NzUxOSwiZXhwIjoxNjg1MDgzNTE5fQ.JgpVuMehJou0EI1RYbtzYt1mNyHM315cEAiUrANwk8NS68n8FEmQNfBfJwTOVnzlG7K_y1JQ6gauYgvmwA9DhQLNOv_6VrXoBjAoSWRT7alNaCm13kAqNX-BZu0xHdkIXpY6DvCi2cg-d_fpYs-FYIIO8cff_0oS7KVhKwGjNoeFPXSjR_Pwdgg0DDSivviC0bkDw8eNsKOCL3s3kbR6Yd8Uvn2X_P8aL705n39iC5DbOOBbTr02NV9KgjlcE3yisyPpijarCyeXdUda5NVZjPOuSG_5IIOirdffd8uRtMQeeRQVsbB9O_3vhSPLE-obwU--3qvUHaVmvZ_gppCypw");
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        // "name": "Drake lynm"
        // });

        // var requestOptions = {
        // method: 'GET',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
        // };

        // fetch("https://evlerr-api.herokuapp.com/api/v1/agency/search-members", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));


    }


    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Team Members</h2>
            </div>
            <section className='membersCard'>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>All Members</p>
                </div>
                <section>
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                </section>
            </section>
            <section className='membersCard' style={{ marginTop: '20px' }}>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>Add Member</p>
                </div>
                <div>
                    <CustomInput placeholder={'Search...'} onChange={onChangeQuery} name={'name'}/>
                </div>
                <div>
                    <CustomButton loading={state.loading} title={'Add Agent'} onClick={searchAgent} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px', marginTop: '10px' }} color={'#fff'} />
                </div>
            </section>
        </main >
    )
}

export default Members