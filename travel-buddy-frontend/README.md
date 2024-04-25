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
