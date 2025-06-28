import type { Contact, CreateContactDto } from "@entities/contact/model";

import { apiClient } from "@shared/api";

export class ContactApi {
	private static readonly BASE_PATH = "/contacts";

	static async createContact(data: CreateContactDto): Promise<Contact> {
		return apiClient.post<Contact, CreateContactDto>(this.BASE_PATH, data);
	}
}
