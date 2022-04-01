import React from 'react';
import Table from 'rc-table';

const NF10XTable = ({columns, data}) => {
    return (
        <Table 
            className="w-full bg-white max-h-[350px] lg:max-h-[900px] overflow-scroll overscroll-auto border-[#E5DBEE] rounded-lg"
            id="user-whitelist-table" 
            columns={columns} 
            data={data}
            rowClassName="text-left"
        />
    )
}

export default NF10XTable;