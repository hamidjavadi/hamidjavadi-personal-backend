import { UserModel } from '../database/mongodb/models/user/user.model';

export class AuthenticationService {
  async signIn(email: string, password: string): Promise<boolean> {
    const user = await UserModel.find();

    console.log(user);

    if (user.length) {
      return true;
    } else {
      return false;
    }
  }
}
