
/* What is g_user
  g_user is used pretty heavily to control access and other things in
  Servicenow. I go over all the methods and properties of those below.
*/

/* GlideUser - Client
   firstName the current user's first name.
*/
 console.log('first name = ' + g_user.firstName);

/* getClientData
   Gets a session client value previously set with putClientData().
*/

 var loginLanguage = g_user.getClientData("loginlanguage");


 /* getFullName
    Returns the first and last name of the current user.
*/
 var formalName = g_user.getFullName();

 
// hasRole
// Returns true if the current user has the specified or admin role.

 var isAdmin = g_user.hasRole('admin');
// hasRoleExactly
// Returns true only if the current user has the specified role.

 var isItil = g_user.hasRoleExactly('itil');
// hasRoleFromList
// Returns true if the current user has at least one of the specified roles
// or has the admin role.

 var isOK = g_user.hasRoleFromList("itil, maint");
// hasRoles
// Returns true if the current user has any role.

 var yesRole = g_user.hasRoles();
// lastName
// The current user's last name.

 console.log('last name = ' + g_user.lastName);
// userID
// The sys_id of the current user.

 var userID = g_user.userID;
 console.log('Current user ID = ' + userID);
// userName
// This property is the current user's username, for example gsmith02. It
// is not the user's name, for example George Smith.

 var userName = g_user.userName;
 console.log('Current user = ' + userName);