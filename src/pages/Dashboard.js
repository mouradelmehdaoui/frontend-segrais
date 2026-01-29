import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistributions } from "../features/distributionSlice";
import TableDistribution from "../components/TableDistribution";
import MapImage from "../components/MapImage";

export default function Dashboard() {
  const dispatch = useDispatch();
  const distributions = useSelector(state => state.distribution.list);

  useEffect(() => {
    dispatch(fetchDistributions());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>ZONE 6 – Groupe Ségrais</h2>

      <div className="my-4">
         <MapImage />
      </div>

      <TableDistribution data={distributions} />
    </div>
  );
}
