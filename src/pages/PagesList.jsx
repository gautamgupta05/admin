import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPages, deletePageById } from "../features/pages/pagesSlice";
import BackButton from "../components/BackButton";

export default function PagesList() {
  const dispatch = useDispatch();
  const pages = useSelector((s) => s.pages.items);

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  const remove = (id) => {
    if (confirm("Delete page?")) {
      dispatch(deletePageById(id)).then(() => dispatch(getPages()));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
         <BackButton />
        <h1 className="text-xl font-bold">Pages</h1>
        <Link to="/pages/create" className="px-4 py-2 bg-blue-600 text-white rounded">
          + Create Page
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Title</th>
            <th className="p-2">Slug</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.slug}</td>
              <td className="p-2 flex gap-2">
                <Link className="px-3 py-1 bg-yellow-400 rounded" to={`/pages/${p.id}/edit`}>
                  Edit
                </Link>
                <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => remove(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
