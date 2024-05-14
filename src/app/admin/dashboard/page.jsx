"use client"

import React, { useEffect } from 'react'
import Card from "../../../appcomponents/Card"
import CardContainer from "../../../appcomponents/CardContainer"
import CustomContainer from "../../../appcomponents/CustomContainer"
import "../../../../styles/globals.css"
import Image from 'next/image'
import { userData } from '@/utils/user'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import bjp from "../../../public/images/bjp.jpeg"

const page = () => {
  const state = useSelector((state) => state.userReducer)
  console.log(state, "state");
  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const router = useRouter();
      if (!user) {
        router.push("/user/login")
      }
      if (user?.role !== "Admin" && user) {
        router.push("/user/dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  }, [])
  let data = state.connection
  let voters = state.users.length
  let partys = state.partys.length
  let elections = state.elections.length
  let votes = state.votes.length
  // const [partynames, setPartynames] = React.useState([])
  // let partysnaemsforfilter
  // state.votes.map((item) => {
  //    partysnaemsforfilter = []
  //   if (item.party?.party_name!=undefined){
      
  //     partysnaemsforfilter.push(item.party?.party_name)
  //     console.log(partysnaemsforfilter, "partynames");
  //   }
  // })

  function calculatePartyVotes(data) {
    const partyVotes = {};
    // Filter out entries where the user has voted for a party
    const votedEntries = data.filter(
      (entry) => entry.party !== null && entry.election !== null
    );
    // Iterate over voted entries
    votedEntries.forEach((entry) => {
      const { party } = entry;
      if (party.party_name in partyVotes) {
        partyVotes[party.party_name]++;
      } else {
        partyVotes[party.party_name] = 1;
      }
    });
    return partyVotes;
  }

  const partyVotes = calculatePartyVotes(state.votes);
  console.log(partyVotes,"partyvotes");
  return (
    <>
      <CustomContainer>
        <div className="flex flex-wrap gap-5 mb-4">
          <div className="col-3">
            <Card title={"Total Voter's"} value={"+" + voters || "+2335"} desc={"+30.1% from last month"} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>} />
          </div>
          <div className="col-3">
            <Card title={"Total Party's"} value={"+" + partys || "+23"} desc={"+43% from last month"} icon={"fa-solid fa-users"} />
          </div>
          <div className="col-3">
            <Card title={"Total Elections"} value={"+" + elections || "+34"} desc={"+66.6% from last month"} icon={"fa-solid fa-users"} />
          </div>
          <div className="col-3">
            <Card title={"Total vote's"} value={"+" + votes || "+460"} desc={"+20.1% from last month"} icon={"fa-solid fa-users"} />
          </div>
        </div>

        <CardContainer >
          <div className="head-content">
            <h3 className='font-semibold'>Party Votes</h3>
            <p className='icon-custom text-[14px]'>Voting count of this month.</p>
          </div>
          <div className="body-list">
            <ul className='py-5'>
              {
                data?.map((val, index) => {
                  return  <li key={ index } className='flex justify-between items-center mb-5' >
                    <div className='flex items-center gap-3'>
                      <div className='party-logo w-[46px] h-[46px] rounded-full'>
                        <Image className='rounded-full grayscale' src={val.party.party_logo} alt='bjp logo' width={46} height={46} />
                      </div>
                      <div>
                        <h1 className='text-md font-semibold'>
                          {val.party.party_name}
                        </h1>
                        <p className='icon-custom'>{val.party.short_code}</p>
                      </div>
                    </div>
                    <div>
                      <h1 className='font-semibold'>+{val.party.party_name == partyVotes[val.party.party_name] ? val.party.party_name : partyVotes[val.party.party_name]||0}</h1>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </CardContainer>
      </CustomContainer >
    </>
  )
}

export default page
