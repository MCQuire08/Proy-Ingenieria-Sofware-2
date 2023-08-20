using DataAccess.DAO;
using DTOs;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mapper
{
    public class CartItemMapper : IObjectMapper, ISqlStatements
    {
        public BaseDTO BuildObject(Dictionary<string, object> row)
        {
            throw new NotImplementedException();
        }

        public List<BaseDTO> BuildObjects(List<Dictionary<string, object>> row)
        {
            throw new NotImplementedException();
        }

        public SQLOperation GetAddStatement(int IdCart, int IdSector, int Quantity)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "CRE_CARTITEM_PR";

            sqlOperation.AddIntParam("P_IDCART", IdCart);
            sqlOperation.AddIntParam("P_IDSECTOR", IdSector);
            sqlOperation.AddIntParam("P_QUANTITY", Quantity);

            return sqlOperation;
        }

        public SQLOperation GetCreateStatement(BaseDTO dto)
        {
            throw new NotImplementedException();
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
