using DataAccess;
using DataAccess.CRUD;
using DocumentFormat.OpenXml.Spreadsheet;
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
        public void Create(User user)
        {
            var mm = new UserCRUDFactory();
            mm.Create(user);
        }

        public void Update(User user)
        {
            var mm = new UserCRUDFactory();
            mm.Update(user);
        }

        public void Delete(User user)
        {
            var mm = new UserCRUDFactory();
            mm.Delete(user);
        }

        public List<User> RetrieveAll()
        {
            var mm = new UserCRUDFactory();
            return mm.RetrieveAll<User>();
        }

        public Users RetrieveById(User user)
        {
            var ucrud = new UserCRUDFactory();
            return ucrud.RetrieveById<Users>(user);
        }

        public User RetrieveByEmailAndPassword(string email, string password)
        {
            var user = new User { Email = email, Password = password };
            var ucrud = new UserCRUDFactory();
            return ucrud.RetrieveByEmailAndPassword<User>(user);
        }
    }


}