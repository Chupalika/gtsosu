import { ITeam, PopulatedTeam } from "../../models/team";
import user, { IUser } from "../../models/user";
import { UserRole } from "../UserRole";
import { PermissionContext } from "./context";

export class TeamContext implements PermissionContext {
  private team: Omit<ITeam, "players"> & PopulatedTeam;

  constructor(team) {
    this.team = team;
  }

  public async hasRole(user: IUser, role: UserRole) {
    switch (role) {
      case UserRole.Captain:
        return this.team.players[0].username === user.username;
      case UserRole.Player:
        return this.team.players.some((p) => p.username === user.username);
      default:
        return false;
    }
  }
}
