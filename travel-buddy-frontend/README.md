Website Information's:

### Important Notes:

##

- Query Param Type Declare Method:

interface IQueryType {
location: string;
type: string;
class: string;
}

const router = useRouter();
const { query } = router;
const {location, type, class,} = query as unknown as IQueryType;

##

- Date Disable Method:

const [startDate, setStartDate] = useState("");

const todaysDate = new Date();
const tomorrowDate = new Date(todaysDate);
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const minEndDate = startDate ? new Date(startDate) : new Date();
minEndDate.setDate(minEndDate.getDate() + 1);

const maxDate = startDate
? new Date(new Date(startDate).getTime() + 7 _ 24 _ 60 _ 60 _ 1000)
.toISOString()
.split("T")[0]
: "";

console.log({ minEndDate, maxDate });

return (
<div className="container px-4 py-12">
<input
type="date"
name="fromDate"
min={tomorrowDate.toISOString().split("T")[0]}
onChange={e => setStartDate(e.target.value)}
/>
<input
type="date"
name="toDate"
id=""
min={minEndDate.toISOString().split("T")[0]}
max={maxDate}
disabled={!startDate}
/>
</div>
);

##
