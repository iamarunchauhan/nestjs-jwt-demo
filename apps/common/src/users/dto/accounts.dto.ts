// export class AccountDto {
//   user_id: number;
//   username: string;
//   password: string;
//   email: string;
// }

// export class ResponseDto {
//   accounts: AccountDto[];
// }

export class UserDto {
  name: string;
}

export class UserDetailsDto {
  id: number;
  name: string;
  email: string;
  //password: string;
  city: string;
}

export class UserDetailsResponseDto {
  users: UserDetailsDto[];
}