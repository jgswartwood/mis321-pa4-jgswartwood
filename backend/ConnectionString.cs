namespace mis321_pa4_jgswartwood
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString(){
            string server = "grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "bt2ht20c437ieibl";
            string port = "3306";
            string userName = "chthd2q0sr981eo6";
            string password = "r5o2184n7n4fi8ls";

            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}