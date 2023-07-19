using DataAccess.DAO;
using DataAccess.Mapper;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.CRUD
{
    public class MembershipsCRUDFactory : CrudFactory
    {
        
        MembershipMapper _mapper;

        public MembershipsCRUDFactory()
        {
            _dao = SqlDao.GetInstance();
            _mapper = new MembershipMapper();
        }

        public override void Create(BaseDTO dto)
        {
           var membership = (Memberships)dto;
            var sqlOperation = _mapper.GetCreateStatement(membership);
           _dao.ExecuteQueryProcedure(sqlOperation);

        }

        public override void Delete(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override T Retrieve<T>()
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            throw new NotImplementedException();
        }

        public override T RetrieveById<T>(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override void Update(BaseDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}
