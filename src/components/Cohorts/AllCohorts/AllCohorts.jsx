import React from 'react';
import { useNavigate } from 'react-router-dom';
import NF10XTable from 'globals/UIComponents/NF10XTable/NF10XTable';
import Button from 'globals/UIComponents/Button/Button';
import EmptyIcon from 'assets/Dashboard/empty-members.svg';
import PlusSign from 'assets/Dashboard/plus.svg';
import RightCaret from 'assets/Dashboard/right-caret.svg';


const data = [
   {
       cohortName: 'Founder',
       groupQuant: 2,
       tokenQuant: 50,
       startDate: '22 July, 2022' ,
       invitesQuant: 6099,
       membersJoined: 2000,
       endDate: '22 August, 2022',
       status: 'Not Started',
       key: 1
   },
   {
       cohortName: 'Founder',
       groupQuant: 2,
       tokenQuant: 50,
       startDate: '22 July, 2022' ,
       invitesQuant: 6099,
       membersJoined: 2000,
       endDate: '22 August, 2022',
       status: 'Not Started',
       key: 2
   },
   {
       cohortName: 'Founder',
       groupQuant: 2,
       tokenQuant: 50,
       startDate: '22 July, 2022' ,
       invitesQuant: 6099,
       membersJoined: 2000,
       endDate: '22 August, 2022',
       status: 'Not Started',
       key: 3
   },
   {
       cohortName: 'Founder',
       groupQuant: 2,
       tokenQuant: 50,
       startDate: '22 July, 2022' ,
       invitesQuant: 6099,
       membersJoined: 2000,
       endDate: '22 August, 2022',
       status: 'Active',
       key: 43432432432
   },
   {
       cohortName: 'Founder',
       groupQuant: 2,
       tokenQuant: 50,
       startDate: '22 July, 2022' ,
       invitesQuant: 6099,
       membersJoined: 2000,
       endDate: '22 August, 2022',
       status: 'Not Started',
       key: 5
   },
]


const AllCohorts = () => {
    const navigate = useNavigate();
    const activeusers = [
        {
          title: 'COHORT NAME',
          dataIndex: 'cohortName',
          key: 'cohortName',
          className: "text-left p-4 font-normal w-10",
          width: 200,
          render: (value) => (
          <div className="flex flex-col line-clamp-2 max-w-[250px]">
            <span className="font-bold text-md mb-1 text-ellipsis overflow-hidden">{value}</span>
          </div>
          )
        },
        {
          title: 'NO. OF GROUPS',
          dataIndex: 'groupQuant',
          key: 'groupQuant',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'NO. OF TOKENS',
          dataIndex: 'tokenQuant',
          key: 'tokenQuant',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'START DATE',
          dataIndex: 'startDate',
          key: 'startDate',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'INVITES SENT',
          dataIndex: 'invitesQuant',
          key: 'invitesQuant',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'MEMBERS JOINED',
          dataIndex: 'membersJoined',
          key: 'membersJoined',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'END DATE',
          dataIndex: 'endDate',
          key: 'endDate',
          width: 200,
          className: "text-left p-4 font-normal",
          render: (value) => <span className="uppercase font-normal text-sm">{value}</span>
        },
        {
          title: 'STATUS',
          dataIndex: 'status',
          key: 'status',
          width: 250,
          className: "text-left p-4 font-normal",
          render: (value, record, key) => 
          <div className="relative flex justify-between items-center">
            <span className={value === 'Active' ? 'uppercase font-normal text-xs bg-activeGreen p-2' : 'uppercase font-normal text-xs bg-purple p-2'}>{value}</span>
            <button onClick={() => navigate(`/home/cohorts/${key}`)} className="w-2 h-2">
                <img className="w-full h-full" src={RightCaret} alt="right caret" />
            </button>
          </div>
        },
      ];
    return (
        <div className="mt-4">
        {data && data.length ? <NF10XTable columns={activeusers} data={data} /> :               
        <section className="flex flex-col items-center pt-10">
            <img src={EmptyIcon} alt="Empty Events" />
            <h2 className="font-normal">No Cohort Found</h2>
            <Button classes="mb-1 mt-2 w-60 text-md flex justify-center items-center">
                <img className="mr-2 w-3 h-3" src={PlusSign} alt="Add member plus sign" />
                <span>Start A New Cohort</span>
            </Button> 
          </section>}
        </div>
    )
}

export default AllCohorts;