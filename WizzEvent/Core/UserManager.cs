using DataAccess;
using DataAccess.CRUD;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class UserManager
    {
        public void Create(Users user)
        {
            var mm = new UsersCRUDFactory();
            mm.Create(user);
        }

        public void Update(Users user)
        {
            var mm = new UsersCRUDFactory();
            mm.Update(user);
        }

        public void Delete(Users user)
        {
            var mm = new UsersCRUDFactory();
            mm.Delete(user);
        }

        public List<Users> RetrieveAll()
        {
            var mm = new UsersCRUDFactory();
            return mm.RetrieveAll<Users>();
        }

        public Users RetrieveById(Users user)
        {
            var ucrud = new UsersCRUDFactory();
            return ucrud.RetrieveById<Users>(user);
        }
    }
}