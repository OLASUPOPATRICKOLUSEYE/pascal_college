import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { examsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import FormModal from "@/components/FormModal";


type Exam = {
    id: number;
    subject: string; 
    class: string;
    teacher: string;
    date: string;
}

const columns = [
    { header: "Exam Name", accessor: "name" },
    { header: "Class", accessor: "class", className: "hidden md:table-cell" },
    { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
    { header: "Date", accessor: "date", className: "hidden md:table-cell" },
    { header: "Action", accessor: "action" },
]


const ExamListPage = () => {

    const renderRow = (item:Exam) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex item-center gap-4 p-4">
                {item.subject}
            </td>
            <td>
                {item.class}
            </td>
            <td className="hidden md:table-cell p-4">
                {item.teacher}
            </td>
            <td className="hidden md:table-cell p-4">
                {item.date}
            </td>
            <td>
                <div className="flex items-center gap-2">
            {role === "admin" && (
                <>
                <FormModal table="exam" type="update" data={item} />
                <FormModal table="exam" type="delete" id={item.id} />
                </>
            )}
                </div>
            </td>
        </tr>
    )


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
    {/* TOP */}
    <div className="flex item-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row item-center gap-4 w-full md:w-auto ">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
                <FormModal table="exam" type="create" />
            )}
            </div>
        </div>
    </div>
    {/* LIST */}
    <Table columns={columns} renderRow={renderRow} data={examsData} />
    {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default ExamListPage;