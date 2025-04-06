
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface UserSettings {
  id?: string;
  user_id?: string;
  full_name?: string;
  email?: string;
  phone_number?: string;
  company_name?: string;
  business_address?: string;
  industry?: string;
  timezone?: string;
  date_format?: string;
  language?: string;
  dark_mode?: boolean;
  created_at?: string;
  updated_at?: string;
}

export const fetchUserSettings = async () => {
  try {
    const { data: settings, error } = await supabase
      .from("user_settings")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return null;
    }

    return settings as UserSettings;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
};

export const updateUserSettings = async (settings: UserSettings) => {
  try {
    const { data, error } = await supabase
      .from("user_settings")
      .update({
        ...settings,
        updated_at: new Date().toISOString(),
      })
      .eq("id", settings.id)
      .select();

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update settings: " + error.message,
        variant: "destructive",
      });
      return null;
    }

    toast({
      title: "Success",
      description: "Settings updated successfully!",
    });

    return data[0] as UserSettings;
  } catch (error) {
    console.error("Error updating settings:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred",
      variant: "destructive",
    });
    return null;
  }
};
