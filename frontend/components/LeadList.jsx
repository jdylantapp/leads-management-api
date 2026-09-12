export const LeadList = ({leads}) => {
    return (
        <div className="max-w-9/10 mx-auto">
            <table className="table table-pin-rows px-10 py-10 text-xl text-center">
                <thead className="sticky top-0 bg-base-300 z-10">
                    <tr className="text-2xl bg-base-200">
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead, index) => 
                        <tr key={lead._id}>
                            <th>{index + 1}</th>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
       
    )
}