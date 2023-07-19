using DataAccess.DAO;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mapper
{
    public class MembershipMapper : ISqlStatements, IObjectMapper
    {
        public BaseDTO BuildObject(Dictionary<string, object> row)
        {
            throw new NotImplementedException();
        }

        public List<BaseDTO> BuildObjects(List<Dictionary<string, object>> row)
        {
            throw new NotImplementedException();
        }

        public SQLOperation GetCreateStatement(BaseDTO dto)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "CRE_MEMBERSHIP_PR";


            var membership = (Memberships)dto;

            sqlOperation.AddVarcharParam("P_NAME", membership.Name);
            sqlOperation.AddFloatParam("P_PRICE", membership.Price);
            sqlOperation.AddIntParam("P_TICKETSTOSELL", membership.TicketsToSell);
            sqlOperation.AddFloatParam("P_COMMISSION", membership.Commission);
          


            return sqlOperation;

        }

        public SQLOperation GetDeleteStatement(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public SQLOperation GetRetrieveAllStatement()
        {
            throw new NotImplementedException();
        }

        public SQLOperation GetRetrieveByIDStatement(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public SQLOperation GetUpdateStatement(BaseDTO dto)
        {
            throw new NotImplementedException();
        }


    }
}
